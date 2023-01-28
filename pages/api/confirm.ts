import { createTransport } from 'nodemailer'

const sendContact = async (req: any, res: any) => {
  const {
    email,
    amount,
    infos,
    name,
    message: messageBody,
  } = req.body

  let canKeep = true
  const message = []

  if (!email) {
    canKeep = false
    message.push('O campo "E-mail" é obrigatório')
  }

  if (!canKeep) {
    res.status(500).json({
      error: message,
    })
    return
  }

  const transporter = createTransport({
    port: 465,
    host: 'mail.zankh.com.br',
    auth: {
      user: 'mateus.santana@zankh.com.br',
      pass: 'mateus.santana',
    },
    secure: true,
  })

  const mailData = {
    from: 'mateus.santana@zankh.com.br',
    to: ['casamentoisaejeff@gmail.com'],
    subject: `Confirmação de presença ${name}`,
    text: `Confirmação de presença ${name}`,
    html: `
      <div>
        <p>
          <strong>
            Olá, recebemos uma nova confirmação de presença pelo site
          </strong>
        </p>
        <br />
        <table border="2" width="400">
          <tr>
            <td>
              Nome
            </td>
            <td>
              ${name}
            </td>
          </tr>
          <tr>
            <td>
              Quantidade de pessoas
            </td>
            <td>
              ${amount}
            </td>
          </tr>
          <tr>
            <td>
              Observações
            </td>
            <td>
              ${infos}
            </td>
          </tr>
          <tr>
            <td>
              Mensagem
            </td>
            <td>
              ${messageBody}
            </td>
          </tr>
        </table>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailData)

    return res.json({
      status: 200,
      message: 'Mensagem enviada com sucesso.',
    })
  } catch (e) {
    return res.status(500)
  }
}

export default sendContact
