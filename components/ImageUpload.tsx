'use client'

import React, { useRef, useState } from 'react'
import { IKImage, ImageKitProvider, IKUpload } from 'imagekitio-next'
import config from '@/lib/config'
import Image from 'next/image'

const {
  env: {
    imageKit: { publicKey, privateKey, urlEndPoint },
  },
} = config

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`)
    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Req failed`, response.status)
    }
    const data = await response.json()
    const { signature, expire, token } = data
    return { token, expire, signature }
  } catch (err) {
    console.log(err.message)
  }
}

const ImageUpload = ({ onFileChange }: { onFileChange: (filePath: string) => void }) => {
  const ikUploadRef = useRef(null)
  const [file, setFile] = useState<{ filePath: string } | null>(null)
  const onError = error => {
    console.log(error)
  }
  const onSuccess = res => {
    setFile(res)
    onFileChange(res.filePath)
  }

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndPoint}
      authenticator={authenticator}>
      <IKUpload
        className='hidden'
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        fileName='test-upload.png'
      />
      <button
        className='upload-btn'
        onClick={e => {
          e.preventDefault()
          if (ikUploadRef.current) {
            //@ts-ignore
            ikUploadRef.current?.click()
          }
        }}>
        <Image
          src='/icons/upload.svg'
          alt='upload-icon'
          width={20}
          height={20}
          className='object-contain'
        />
        <p className='text-base text-light-100'>Upload a File</p>
        {file && <p className='upload-filename'>{file.filePath}</p>}
      </button>
      {file && (
        <IKImage
          alt={file.filePath}
          path={file.filePath}
          width={500}
          height={500}
        />
      )}
    </ImageKitProvider>
  )
}

export default ImageUpload
