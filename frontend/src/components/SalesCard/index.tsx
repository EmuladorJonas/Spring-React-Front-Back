import NotificationButton from "../NotificationButton"
import "./styles.css"

function SalesCard() {
  return (
    <div className="cartão">
      <h2>Vendas</h2>

      <div>
        <div className="container_da_entrada">
          <input className="entrada" type="text" placeholder="--/--/----" />
        </div>

        <div className="container_da_entrada">
          <input className="entrada" type="text" placeholder="--/--/----" />
        </div>
      </div>

      <div>
        <table className="tabela_de_vendas">
          <thead>
            <tr>
              <th className="aparecer_992">ID</th>
              <th className="aparecer_576">Data</th>
              <th >Vendedor</th>
              <th className="aparecer_992">Visitas</th>
              <th className="aparecer_992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="aparecer_992">#341</td>
              <td className="aparecer_576">08/07/2022</td>
              <td>Anakin</td>
              <td className="aparecer_992">15</td>
              <td className="aparecer_992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="btn_not_container">
                  <NotificationButton />
                </div>
              </td>
            </tr>

            <tr>
              <td className="aparecer_992">#341</td>
              <td className="aparecer_576">08/07/2022</td>
              <td>Anakin</td>
              <td className="aparecer_992">15</td>
              <td className="aparecer_992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="btn_not_container">
                  <NotificationButton />
                </div>
              </td>
            </tr>

            <tr>
              <td className="aparecer_992">#341</td>
              <td className="aparecer_576">08/07/2022</td>
              <td>Anakin</td>
              <td className="aparecer_992">15</td>
              <td className="aparecer_992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="btn_not_container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default SalesCard
