import React from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';

function Titulo(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
    </>
  );
}

export default function PaginaInicial() {
  const [username, setUsername] = React.useState('');
  const roteamento = useRouter();

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundImage: 'url(https://i.pinimg.com/originals/7c/b9/c8/7cb9c8b8ab1e53c8aa702d307f6eeae5.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'bottom',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function(infosDoEvento){
              infosDoEvento.preventDefault();
              console.log('alguém submeteu o form')
              roteamento.push(`/chat?username=${username}`)
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>

            <TextField
            value={username}
            onChange={function (event){
              console.log('usuario digitou', event.target.value);
              //onde tá o valor?
              const valor = event.target.value;
              //trocar o valor da variavel através do react e avise quem precisa
              setUsername(valor);
            }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
              placeholder='insira seu usuário do github aqui sem o @'
            />

            {`${username}` === ('') ? 
            <Button 
            type='submit'
            label='Entrar'
            fullWidth
            buttonColors={{
              contrastColor: appConfig.theme.colors.neutrals["000"],
              mainColor: appConfig.theme.colors.primary[500],
              mainColorLight: appConfig.theme.colors.primary[400],
              mainColorStrong: appConfig.theme.colors.primary[600],
            }}
            disabled/> 
            :
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
              />
            }
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.primary[500],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            {`${username}` === ('') 
            ? <Image src={'https://github.com/github.png'} styleSheet={{borderRadius:'15px'}}/> 
            : <Image src={`https://github.com/${username}.png`} styleSheet={{borderRadius:'15px'}} />}

            {`${username}` === ('') ? null : 
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.primary[500],
                backgroundColor: appConfig.theme.colors.neutrals[100],
                padding: '3px 10px',
                borderRadius: '1000px',
                marginTop: '20px'
              }}
            >
              {username}
            </Text>
            }
           
          </Box>
          {/* Photo Area */}
        </Box>
        <Text 
        styleSheet={{
          color: '#fff',
          fontSize: '12px',
          backgroundColor: appConfig.theme.colors.primary[500],
          padding: '3px',
          width: '100%',
          position: 'absolute',
          top: '90%',
          textAlign: 'center'
        }}        
        >Copyrights: Projeto base: Alura | Redesign e novas funcionalidades: Fernanda Tatsch | <a style={{textDecoration:'none', color: '#fff'}} href='http://phpography.com'>Background: phpography.com </a> | <a style={{textDecoration:'none', color: '#fff' }} href='https://github.com/github.png?size=40'>Avatar: GitHub</a>
        </Text>
      </Box>
    </>
  );
}