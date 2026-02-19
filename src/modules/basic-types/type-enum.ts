export const bootstrap = (): void => {
  enum OrderStatus {
    PENDING, // defaut = 0
    DELIVERED = 'entregue',
    CANCELED = 'cancelado',
  }

  console.log(OrderStatus);
  console.log(OrderStatus.CANCELED);
  //console.log(OrderStatus[523]);

  enum OrderStatus {
    WAITINGFORPAYMENT = 500,
    SENT = 'enviado'
  }

  function changeOrderStatus(newStatus: OrderStatus):void{
    if(newStatus === OrderStatus.SENT) {
        // .. enviar email para cliente
        console.log('Novo Status: ', newStatus)
    }
  }

  changeOrderStatus(OrderStatus.SENT)
};
