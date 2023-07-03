import { AddressContainer } from './style'

export function Address() {
  return (
    <AddressContainer>
      <input type="text" name="cep" placeholder="CEP" />
      <input type="text" name="street" placeholder="Rua" />
      <input type="text" name="number" placeholder="Número" />
      <input type="text" name="complement" placeholder="Complemento" />
      <input type="text" name="neighborhood" placeholder="Bairro" />
      <input type="text" name="city" placeholder="Cidade" />
      <input type="text" name="state" placeholder="UF" />
    </AddressContainer>
  )
}
