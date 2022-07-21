class OrderMailer < ApplicationMailer
  byebug
  CONTACT = []
  CONTACT = ["mahimayuvasoft368@gmail.com" ,"shubhamyuvasoft359@gmail.com", "siddheshjadhav324@gmail.com"]
  def new_order_email
      byebug
      @event = params[:event]

    mail(to: CONTACT, subject: "Event is created!")
  end
end
