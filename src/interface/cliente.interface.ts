export interface IClienteInterface {
    id: number;
    nomeCliente: string;
    razaoSocial: string;
    cnpj: string;
    codigoCnae: string;
    endereco: string;
}
export class ClienteModel implements IClienteInterface {
    id: number = 0;    
    nomeCliente: string = ''; 
    razaoSocial: string = '';
    cnpj: string = '';
    codigoCnae: string = '';
    endereco: string = '';
  }