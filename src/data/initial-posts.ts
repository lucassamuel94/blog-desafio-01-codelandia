import { PostType } from "../@types/post";

export const initialPosts : Array<PostType> = [
  {
    id: '1',
    title: 'O que é linguagem de programação? Conheça as principais',
    description: 'Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.',
    date: '17 de ago, 2024',
    isFavorite: true
  },
  {
    id: '534b284e-a6d8-4168-a450-47b01e72b7ef',
    title: 'GitHub agora permite fazer login sem precisar de senha',
    description: 'O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.',
    date: '12 de jul, 2024',
    isFavorite: false
  },
  {
    id: '099b9781-62b2-40b3-b005-4e2fdd52f795',
    title: 'Por que os hiperlinks são azuis em sua maioria?',
    description: 'Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor.',
    date: '21 de jun, 2024',
    isFavorite: false
  }
] 