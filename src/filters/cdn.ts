const defaultOptions = {
  type: 'thumb',
  size: '750x750',
  q: 100,
}

interface Options {
  type?: string
  size?: string
  q?: number
}

const cdn = (value: string, options: Options) => {
  const option = {
    ...defaultOptions,
    ...options,
  }
  const { type, size, q } = option

  return value + `?type=${type}&opt=R${size}.q${q}`
}

export default cdn
