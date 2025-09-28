export interface AsciiOptions {
  /**
   * 最大输出宽度（字符数）
   */
  maxWidth?: number
  /**
   * 用于渲染的字符序列，灰度从暗到亮
   */
  characterRamp?: string
  /**
   * 是否反转字符序列
   */
  invert?: boolean
  /**
   * 字符纵横比，通常字符高度约为宽度的两倍
   */
  pixelAspectRatio?: number
}

const DEFAULT_CHARACTERS = ' .:-=+*#%@'

const DEFAULT_OPTIONS: Required<Pick<AsciiOptions, 'characterRamp' | 'maxWidth' | 'invert' | 'pixelAspectRatio'>> = {
  characterRamp: DEFAULT_CHARACTERS,
  maxWidth: 120,
  invert: false,
  pixelAspectRatio: 2,
}

export interface AsciiDimensions {
  width: number
  height: number
}

export function calculateAsciiDimensions(
  sourceWidth: number,
  sourceHeight: number,
  options?: Pick<AsciiOptions, 'maxWidth' | 'pixelAspectRatio'>
): AsciiDimensions {
  const { maxWidth, pixelAspectRatio } = { ...DEFAULT_OPTIONS, ...options }
  const width = Math.max(1, Math.min(maxWidth, Math.round(sourceWidth)))
  const scale = width / sourceWidth
  const scaledHeight = sourceHeight * scale
  const height = Math.max(1, Math.round(scaledHeight / pixelAspectRatio))
  return { width, height }
}

function pickCharacter(luminance: number, ramp: string, invert: boolean) {
  const index = Math.min(ramp.length - 1, Math.floor(luminance * (ramp.length - 1)))
  return invert ? ramp[ramp.length - 1 - index] : ramp[index]
}

export function convertImageDataToAscii(imageData: ImageData, options?: AsciiOptions): string {
  const { characterRamp, invert } = { ...DEFAULT_OPTIONS, ...options }
  const { data, width, height } = imageData
  const rows: string[] = []

  for (let y = 0; y < height; y += 1) {
    let row = ''
    for (let x = 0; x < width; x += 1) {
      const offset = (y * width + x) * 4
      const r = data[offset]
      const g = data[offset + 1]
      const b = data[offset + 2]
      const a = data[offset + 3] / 255
      const luminance = ((0.299 * r + 0.587 * g + 0.114 * b) / 255) * a
      row += pickCharacter(luminance, characterRamp, invert)
    }
    rows.push(row)
  }

  return rows.join('\n')
}

export function drawElementToCanvas(
  element: CanvasImageSource,
  canvas: HTMLCanvasElement,
  dimensions: AsciiDimensions
) {
  if (canvas.width !== dimensions.width || canvas.height !== dimensions.height) {
    canvas.width = dimensions.width
    canvas.height = dimensions.height
  }

  const context = canvas.getContext('2d', { willReadFrequently: true })
  if (!context) {
    throw new Error('无法创建 2D 渲染上下文')
  }

  context.clearRect(0, 0, canvas.width, canvas.height)
  context.drawImage(element, 0, 0, canvas.width, canvas.height)

  return context
}

export function convertElementToAscii(
  element: CanvasImageSource,
  canvas: HTMLCanvasElement,
  options?: AsciiOptions
) {
  const baseOptions = { ...DEFAULT_OPTIONS, ...options }
  const width =
    'videoWidth' in element
      ? (element as HTMLVideoElement).videoWidth
      : 'naturalWidth' in element
        ? (element as HTMLImageElement).naturalWidth
        : canvas.width
  const height =
    'videoHeight' in element
      ? (element as HTMLVideoElement).videoHeight
      : 'naturalHeight' in element
        ? (element as HTMLImageElement).naturalHeight
        : canvas.height

  const dimensions = calculateAsciiDimensions(width, height, baseOptions)
  const context = drawElementToCanvas(element, canvas, dimensions)
  const imageData = context.getImageData(0, 0, dimensions.width, dimensions.height)
  return convertImageDataToAscii(imageData, baseOptions)
}
