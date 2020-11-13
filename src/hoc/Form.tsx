import React from 'react'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  children: PropTypes.node.isRequired,
  opts: PropTypes.object
}

type Props = InferProps<typeof propTypes>

const defaultProps: Props = {
  opts: {}
}

function Form ({ children, opts }: Props) {
  const methods = useForm<any>(opts)

  return <FormProvider {...methods}>{children}</FormProvider>
}

Form.propTypes = propTypes
Form.defaultProps = defaultProps

Form.useForm = useFormContext

export default Form
