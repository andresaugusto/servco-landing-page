import React from 'react'
import { Copy } from './Copy'
import { productName } from '@/definitions/product'

export const Signature: React.FC = () => {
  return (
    <div className="p-sm lg:p-md lg:py-xs">
      <Copy variant="footnote">{productName} * AA, 2024</Copy>
    </div>
  )
}