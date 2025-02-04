import React, { useEffect } from 'react'
import { Box, IconButton, TextField, FormHelperText } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import { Controller } from 'react-hook-form'

export interface QuantitySelectorProps {
  control: any
  name: string
  initialQuantity?: number
  minQuantity?: number
  maxQuantity?: number
  rules?: any
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  helperText?: string
  isHasMessageError?: boolean
  variant?: 'outlined' | 'filled' | 'standard'
  onChangeValue?: (val: number) => void
}

const QuantitySelector = ({
  control,
  name,
  initialQuantity = 1,
  minQuantity = 1,
  maxQuantity = 10,
  rules,
  disabled,
  readOnly,
  required,
  helperText,
  isHasMessageError = true,
  variant = 'outlined',
  onChangeValue,
}: QuantitySelectorProps) => {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <Box display='flex' alignItems='center' justifyContent='center'>
            <IconButton
              onClick={() => {
                if (value > minQuantity) {
                  onChange(value - 1)
                  if (onChangeValue) {
                    onChangeValue(value - 1)
                  }
                }
              }}
              color='primary'
              disabled={value <= minQuantity || disabled || readOnly}
            >
              <Remove />
            </IconButton>

            <TextField
              className='text-center w-2'
              value={value}
              onChange={(e) => {
                const newValue = parseInt(e.target.value, 10)
                if (!isNaN(newValue)) {
                  if (newValue >= minQuantity && newValue <= maxQuantity) {
                    onChange(newValue) // Cập nhật giá trị bằng onChange của react-hook-form
                    if (onChangeValue) {
                      onChangeValue(newValue)
                    }
                  }
                }
              }}
              inputProps={{
                min: minQuantity,
                max: maxQuantity,
                type: 'number',
              }}
              variant={variant}
              size='small'
              sx={{ width: 45, textAlign: 'center', margin: '0 4px' }}
              disabled={disabled || readOnly}
              required={required}
              helperText={error && isHasMessageError && error.message}
              error={!!error}
            />

            <IconButton
              onClick={() => {
                if (value < maxQuantity) {
                  onChange(value + 1)
                  if (onChangeValue) {
                    onChangeValue(value + 1)
                  }
                }
              }}
              color='primary'
              disabled={value >= maxQuantity || disabled || readOnly}
            >
              <Add />
            </IconButton>
          </Box>
        )}
      />

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </div>
  )
}

export default QuantitySelector
