class Worker < ApplicationRecord

  validates :name, :title, presence: true
end
