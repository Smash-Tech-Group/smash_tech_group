import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
const inputDir = path.resolve('testimonialimages')
const outputDir = path.resolve('optimizedtestimonialimages')

function ensureDirectoryExists(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

async function processPNGs(
  currentInputDir: string,
  currentOutputDir: string
): Promise<void> {
  ensureDirectoryExists(currentOutputDir)

  const files = fs.readdirSync(currentInputDir)

  for (const file of files) {
    const inputPath = path.join(currentInputDir, file)
    const outputPath = path.join(currentOutputDir, file)

    // 🚫 Prevent touching the output folder
    if (inputPath.startsWith(outputDir)) continue

    const stat = fs.statSync(inputPath)

    if (stat.isDirectory()) {
      await processPNGs(inputPath, outputPath)
      continue
    }

    if (file.toLowerCase().endsWith('.png')) {
      const beforeSize = stat.size

      await sharp(inputPath)
        .png({
          compressionLevel: 9,
          adaptiveFiltering: true,
          palette: true
        })
        .toFile(outputPath)

      const afterSize = fs.statSync(outputPath).size

      console.log(
        `Compressed: ${inputPath}\n` +
        `   ${(beforeSize / 1024).toFixed(1)} KB → ${(afterSize / 1024).toFixed(1)} KB`
      )
    }
  }
}

async function run(): Promise<void> {
  try {
    console.log('Starting PNG compression...\n')
    await processPNGs(inputDir, outputDir)
    console.log('\nPNG compression complete.')
  } catch (error) {
    console.error('Compression failed:', error)
    process.exit(1)
  }
}

run()