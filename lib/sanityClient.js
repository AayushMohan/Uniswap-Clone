import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '2q31k4am',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skEYIBMxgiDX2RkZmpTvoCBVKPujjuojwJSiVbl7cAbIV7ObgZNcWXy2pBZP6AslfNMysr5S348Rxasszj0hUk7CQ6JIW5pQYa0O7hJFJlN4kyOXtoTdoZYE9CYDJZfGuSDmhc3LyoSAN5tZi0XvL04hucqA0FHTtMpkv9SVF6hkfOhbjxUR',
  useCdn: false,
})
