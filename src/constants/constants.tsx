import { Clients } from '../components/Depositions/types';
import ClientIcon from '../assets/icons/client.svg';
import { Questions } from '../components/Faq/types';
import * as Yup from 'yup';
import { Links } from '../components/Header/types';
import ShopIcon from '../assets/icons/shop.svg';
import UserIcon from '../assets/icons/user.svg';
import Acer from '../assets/partners/acer.png';
import Adobe from '../assets/partners/adobe.png';
import Amd from '../assets/partners/amd.png';
import Apc from '../assets/partners/apc.png';
import Bematech from '../assets/partners/bematech.png';
import BitDefender from '../assets/partners/bitDefender.png';
import Cisco from '../assets/partners/cisco.png';
import Corsair from '../assets/partners/corsair.png';
import Dell from '../assets/partners/dell.png';
import Fortinet from '../assets/partners/fortinet.png';
import Hewlet from '../assets/partners/hewlet.png';
import Hyperx from '../assets/partners/hyperx.png';
import Intel from '../assets/partners/intel.png';
import Kingstom from '../assets/partners/kingstom.png';
import Lenovo from '../assets/partners/lenovo.png';
import Logitech from '../assets/partners/logitech.png';
import Microsoft from '../assets/partners/microsoft.png';
import Nhs from '../assets/partners/nhs.png';
import Nvidia from '../assets/partners/nvidia.png';
import Philips from '../assets/partners/philips.png';
import Samsumg from '../assets/partners/samsumg.png';
import Tcl from '../assets/partners/tcl.png';
import TpLink from '../assets/partners/tplink.png';
import Western from '../assets/partners/western.png';
import FacebookIcon from '../assets/icons/facebook.svg';
import YoutubeIcon from '../assets/icons/youtube.svg';
import InstagramIcon from '../assets/icons/instagram.svg';
import { FooterTypes } from '../components/Footer/types';
import { weOffer, Products } from '../components/Services/types';
import BackupIcon from '../assets/services/backup.svg';
import SecurityIcon from '../assets/services/security.svg';
import SolutionsIcon from '../assets/services/solutions.svg';
import StructureIcon from '../assets/services/structure.svg';
import PrinterIcon from '../assets/services/products/printer.svg';
import AdobeIcon from '../assets/services/products/adobe.svg';
import WebCamIcon from '../assets/services/products/webcam.svg';
import ComputerIcon from '../assets/services/products/computer.svg';

export const paths: Links[] = [
  {
    items: ['Produtos', 'Serviços', 'Locação', 'Cloud'],
    shop: ShopIcon,
    user: UserIcon,
  },
];

export const clients: Clients[] = [
  {
    deposition:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    clientImage: ClientIcon,
    clientName: 'Nome do Cliente',
    customerCharge: 'Cargo do cliente',
  },
  {
    deposition:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    clientImage: ClientIcon,
    clientName: 'Nome do Cliente',
    customerCharge: 'Cargo do cliente',
  },
  {
    deposition:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    clientImage: ClientIcon,
    clientName: 'Nome do Cliente',
    customerCharge: 'Cargo do cliente',
  },
];

export const questions: Questions[] = [
  {
    title: 'A Altatech é uma distribuidora?',
    answer: 'Não, somos uma revendedora com atuação nacional.',
    key: 'item1',
  },
  {
    title: 'A Altatech tem loja física?',
    answer:
      'A Matriz é sediada em Londrina-Pr há 18 anos. Obtenha maiores detalhes pelo nosso telefone: (11) 4063-1002',
    key: 'item2',
  },
  {
    title: 'A Altatech trabalha com licitações?',
    answer: 'Não atendemos as licitações',
    key: 'item3',
  },
  {
    title: 'Os preços são iguais para todos os estados?',
    answer:
      'Existe uma pequena variação baseada na alíquota de impostos que cada estado pratica.',
    key: 'item4',
  },
  {
    title: 'Possui valor mínimo para compra?',
    answer:
      'Consulte nossos consultores comerciais e obtenha mais informações.',
    key: 'item5',
  },
  {
    title: 'Qual é a forma de pagamento?',
    answer:
      'À vista - deposito ou boleto bancário | A prazo - Boleto bancário, cartão BNDS, cartão de credito e financiamento bancário.',
    key: 'item6',
  },
  {
    title: 'Qual é prazo de entrega?',
    answer:
      'Após o faturamento do pedido de compra, de 3 a 12 dias dependendo do estado.',
    key: 'item7',
  },
  {
    title: 'Vende para pessoa física?',
    answer: 'Sim, somente com pagamento à vista e antecipado.',
    key: 'item8',
  },
];

export const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'O nome deve conter, pelo menos, um caractere')
    .required('Preencha seu nome completo'),

  cnpj: Yup.string()
    .min(14, 'O CNPJ deve conter 14 dígitos')
    .required('Preencha seu CNPJ'),

  phone: Yup.string()
    .required('Preencha seu telefone')
    .min(8, 'O telefone deve ter, no mínimo, 8 números'),

  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Preencha seu E-mail'),
  message: Yup.string().required('Digite sua mensagem'),
});

export const formSchemaNewsletter = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Preencha seu E-mail'),
});

export const photos: string[] = [
  Acer,
  Adobe,
  Amd,
  Apc,
  Bematech,
  BitDefender,
  Cisco,
  Corsair,
  Dell,
  Fortinet,
  Hewlet,
  Hyperx,
  Intel,
  Kingstom,
  Lenovo,
  Logitech,
  Microsoft,
  Nhs,
  Nvidia,
  Philips,
  Samsumg,
  Tcl,
  Western,
  TpLink,
];

export const services: weOffer[] = [
  { service: 'Backup em Nuvem', icon: BackupIcon },
  { service: 'Infraestrutura', icon: StructureIcon },
  { service: 'Segurança em T.I', icon: SecurityIcon },
  { service: 'Soluções em T.I', icon: SolutionsIcon },
];

export const products: Products[] = [
  {
    service: 'Produtos e Softwares',
    icons: [WebCamIcon, ComputerIcon, PrinterIcon, AdobeIcon],
  },
];

export const footer: FooterTypes[] = [
  {
    title: 'Políticas',
    items: [
      'Política de privacidade',
      'Política de Cookies',
      'Política de Cancelamento',
      'Política Comercial',
      'Política de Garantia',
      'LGPD',
    ],
  },
  { title: 'Termos', items: ['Termos de uso', 'Termo de Adesão Cloud'] },
  {
    title: 'Informações gerais',
    items: [
      'Atendimento de Segunda a Sexta das 08:00 às 18:00',
      'Av. Juscelino Kubitscheck, 1905 - Centro',
      'CEP 86010-540 - Londrina - PR',
      'comercial@altatech.com.br',
    ],
  },
  {
    title: 'Acompanhe nossas redes sociais',
    medias: [FacebookIcon, YoutubeIcon, InstagramIcon],
    items: [
      'Copyright © 2022',
      'Todos os Direitos Reservados',
      'CNPJ: 05.365.132/0001-30',
    ],
  },
];

export const screenTablet = window.matchMedia('(max-width: 900px)');

export const breakpointTablet = window.matchMedia('(min-width: 600px)');

export const screenSmartphone = window.matchMedia('(max-width: 600px)');

export const breakpointSmartphone = window.matchMedia('(min-width: 300px)');
