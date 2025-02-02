'use client'
import AuthForm from '@/components/AuthForm'
import { signInSchema } from '@/lib/validation'
import React from 'react'

const Page = () => (
  <AuthForm
    type='SIGN_UP'
    schema={signInSchema}
    defaultValues={{
      email: '',
      password: '',
      fullName: '',
      universityId: '',
      universityCard: '',
    }}
    onSubmit={() => {}}
  />
)

export default Page
