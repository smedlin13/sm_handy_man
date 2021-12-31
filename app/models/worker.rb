class Worker < ApplicationRecord
  has_many :services, dependent: :destroy

  validates :name, :title, :number, presence: true
end
