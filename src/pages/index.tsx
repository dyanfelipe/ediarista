import SafeEnvironment from "ui/components/feedback/SafeEnvironment";
import PageTitle from "ui/components/DataDisplay/PageTitle/PageTitle";
import Userinformation from "../ui/components/DataDisplay/UserInformation/Userinformation";
import TextFieldMask from "../ui/components/inputs/TextFieldMask/TextFieldMask";
import {Button, CircularProgress, Container, Typography} from "@material-ui/core";
import {FormElementsContainer, ProfissionaisContainer, ProfissionaisPaper} from "@styles/pages/index.styles";
import useIndex from "../data/hooks/pages/useIndex.pages";

export default function Home() {
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diarista,
    buscaFeita,
    carregando,
    diaristasRestantes
  } = useIndex()
  return (
    <div>
      <SafeEnvironment/>
      <PageTitle
        title="Conheça os profissionais"
        subtitle="Preencha seu endereço e veja todos os profissionais da sua localidade"
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            value={cep}
            onChange={
              (event) => setCep(event.target.value)
            }
          />
          {erro && <Typography color={'error'}>{erro}</Typography>}
          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{width: '220px', mt: 2}}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ?
              <CircularProgress size={20}/>
              : 'Buscar'
            }
          </Button>
        </FormElementsContainer>
        {buscaFeita &&
        (diarista.length > 0 ? (
          <ProfissionaisPaper>
            <ProfissionaisContainer>
              {diarista.map((diarista, index)=>(
                <Userinformation key={index}
                  name={diarista.nome_completo}
                  picture={diarista.foto_usuario}
                  description={diarista.cidade}
                  rating={diarista.reputacao}
                />
              ))}
            </ProfissionaisContainer>
            <Container sx={{textAlign: 'center'}}>
              {diaristasRestantes > 0 && (
                <Typography sx={{mt: 5}}>
                  ... e
                  mais {diaristasRestantes} {diaristasRestantes > 1 ? 'profissionais atendem' : 'profissional atende'} ao
                  seu endereço.
                </Typography>
              )}

              <Button
                variant={'contained'}
                color={'secondary'}
                sx={{mt: 5}}
              >
                Contrata um profissional
              </Button>
            </Container>
          </ProfissionaisPaper>
        ) : (
          <Typography align={'center'} color={'textprimary'}>
            Ainda não temos nenhuma diarista disponível em sua regiao
          </Typography>
        ))}
      </Container>

    </div>
  )
}
