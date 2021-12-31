class Worker < ApplicationRecord
  has_many :services; dependent: :destroy
  validates :name, :title, presence: true
end
