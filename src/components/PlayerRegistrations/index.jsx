import React, { Component } from 'react'
import './index.css'

export class PlayerRegistrations extends Component {

  constructor() {
    super()
    this.unidade = 1
    this.arrayPacientes = []
  }

  salvar() {
    let paciente = this.lerDados()

    if (this.validaCampo(paciente)) {
      this.adicionar(paciente)
    }

    this.listaTabela()
    this.cancelar()
  }

  listaTabela() {
    let tbody = document.getElementById('tbodyProduto')
    tbody.innerText = ''

    for (let i = 0; i < this.arrayPacientes.length; i++) {
      let tr = tbody.insertRow()

      let td_unidade = tr.insertCell()
      let td_nomePaciente = tr.insertCell()
      let td_idadePaciente = tr.insertCell()
      let td_transtorno = tr.insertCell()

      td_unidade.innerText += this.arrayPacientes[i].unidade
      td_nomePaciente.innerText += this.arrayPacientes[i].nomePaciente
      td_idadePaciente.innerText += this.arrayPacientes[i].idadePaciente
      td_transtorno.innerText += this.arrayPacientes[i].transtorno
    }
  }

  adicionar(paciente) {
    this.arrayPacientes.push(paciente)
    this.unidade++
  }

  lerDados() {
    let paciente = {}

    paciente.unidade = this.unidade
    paciente.nomePaciente = document.getElementById('nome').value
    paciente.idadePaciente = document.getElementById('idade').value
    paciente.transtorno = document.getElementById('transtorno').value

    return paciente
  }

  cancelar() {
    document.getElementById('nome').value = ''
    document.getElementById('idade').value = ''
    document.getElementById('transtorno').value = ''
  }


  validaCampo(paciente) {
    let msg = '';

    if (paciente.nomePaciente === '') {
      msg += 'Informe o nome do paciente \n'
    }
    if (paciente.idadePaciente === '') {
      msg += 'Informe a idade do paciente \n'
    }
    if (paciente.transtorno === '') {
      msg += 'Informe o transtorno do paciente \n'
    }

    if (msg !== '') {
      alert(msg)
      return false
    }

    return true
  }

  render() {
    return (
      <div className=''>
        <div className="register-patients">
          <label className='label-register-players'>Nome:
            <input type="text" className='input-register-players' id='nome' />
          </label>

          <label className='label-register-players'>Idade:
            <input type="text" className='input-register-players' id='idade' />
          </label>

          <label className='label-register-players'>Transtorno:
            <input type="text" className='input-register-players' id='transtorno' />
          </label>

          <div className='btn-register-patients'>
            <button className='btn-patients' onClick={() => this.salvar()}>Salvar</button>
          </div>
        </div>
        <div className="tabela">
          <table>
            <thead>
              <td>N° Paciente</td>
              <td>Nome</td>
              <td>Idade</td>
              <td>Transtorno</td>
            </thead>

            <tbody className='tbody-patients' id="tbodyProduto">

            </tbody>
          </table>

        </div>

      </div>
    )
  }
}
export default PlayerRegistrations


