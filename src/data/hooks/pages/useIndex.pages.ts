import {useMemo, useState} from "react";
import {UserShortInterface} from "../../@types/userInterface";
import {ValidationService} from "../../services/ValidationService";
import {ApiService} from "../../services/ApiService";
// https://ediaristas-workshop.herokuapp.com/api/diaristas-cidade?cep=01001000
export default function useIndex() {
  const [cep, setCep] = useState(''),
    cepValido = useMemo(() => {
      return ValidationService.cep(cep)
    }, [cep]),
    [erro, setErro] = useState(''),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [diarista, setDiarista] = useState<UserShortInterface[]>([]),
    [diaristasRestantes, setDiaristasRestantes] = useState(0)

  async function buscarProfissionais(cep: string) {
    setBuscaFeita(false);
    setCarregando(true)
    setErro('')
    try {
      const {data} = await ApiService.get<{
        diaristas: UserShortInterface[],
        quantidade_diaristas: number
      }>(`/api/diaristas-cidade?cep=${cep.replace(/\D/g, '')}`)
      setDiarista(data.diaristas)
      setDiaristasRestantes(data.quantidade_diaristas)
      setBuscaFeita(true)
      setCarregando(false)
    } catch (e) {
      setErro('CEP não entrado')
      setCarregando(false)
    }
  }

  cepValido ? 'CEP VALIDO' : 'CEP INVALIDO'

  return {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diarista,
    buscaFeita,
    carregando,
    diaristasRestantes
  }
}
