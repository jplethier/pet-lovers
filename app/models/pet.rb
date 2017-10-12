# Pet model
class Pet < ApplicationRecord
  belongs_to :user

  validates :name, presence: true

  def picture_url
    self[:picture_url].presence || 'https://d30y9cdsu7xlg0.cloudfront.net/png/13421-200.png'
  end
end
