import { IOrderFormData } from '../..'
import { AddressContainer } from './style'
import { UseFormRegister } from 'react-hook-form'

interface IAddress {
  register: UseFormRegister<IOrderFormData>
}

export function Address({ register }: IAddress) {
  return (
    <AddressContainer>
      <input type="text" {...register('cep')} placeholder="CEP" />
      <input type="text" {...register('street')} placeholder="Rua" />
      <input type="text" {...register('number')} placeholder="Número" />
      <input
        type="text"
        {...register('complement')}
        placeholder="Complemento"
      />
      <input type="text" {...register('neighborhood')} placeholder="Bairro" />
      <input type="text" {...register('city')} placeholder="Cidade" />
      <input type="text" {...register('state')} placeholder="UF" />
    </AddressContainer>
  )
}
