import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import { optimize } from 'svgo'

const inputDir = path.resolve('assets')
const outputDir = path.resolve('optimizedassets')

const ONE_MB = 1024 * 1024

function ensureDirectoryExists(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

async function processImages(
  currentInputDir: string,
  currentOutputDir: string
): Promise<void> {
  ensureDirectoryExists(currentOutputDir)

  const files = fs.readdirSync(currentInputDir)

  for (const file of files) {
    const inputPath = path.join(currentInputDir, file)
    const outputPath = path.join(currentOutputDir, file)

    // 🚫 Skip output folder completely
    if (inputPath.startsWith(outputDir)) continue

    const stat = fs.statSync(inputPath)

    if (stat.isDirectory()) {
      await processImages(inputPath, outputPath)
      continue
    }

    // =========================
    // PNG Handling
    // =========================
    if (file.endsWith('.png')) {
      await sharp(inputPath)
        .png({
          compressionLevel: 9,
          adaptiveFiltering: true,
          palette: true
        })
        .toFile(outputPath)

      console.log(`Compressed PNG: ${inputPath}`)
    }

    // =========================
    // SVG Handling
    // =========================
    if (file.endsWith('.svg')) {
      if (stat.size > ONE_MB) {
        // 🔥 Convert large SVG to PNG
        const pngOutputPath = outputPath.replace('.svg', '.png')

        await sharp(inputPath)
          .png({
            compressionLevel: 9,
            adaptiveFiltering: true,
            palette: true
          })
          .toFile(pngOutputPath)

        console.log(
          `Converted LARGE SVG → PNG: ${inputPath} (${(
            stat.size /
            1024 /
            1024
          ).toFixed(2)} MB)`
        )
      } else {
        // Optimize small SVG normally
        const svgContent = fs.readFileSync(inputPath, 'utf-8')

        const result = optimize(svgContent, {
          multipass: true
        })

        fs.writeFileSync(outputPath, result.data)

        console.log(`Optimized SVG: ${inputPath}`)
      }
    }
  }
}

async function run(): Promise<void> {
  try {
    console.log('Starting image optimization...\n')
    await processImages(inputDir, outputDir)
    console.log('\nImage optimization complete.')
  } catch (error) {
    console.error('Error optimizing images:', error)
    process.exit(1)
  }
}

run()
