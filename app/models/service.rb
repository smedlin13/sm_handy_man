class Service < ApplicationRecord
  belongs_to :workers
  validates :type, :min, :desc, presence: true
  validates :mins, numericality: { only_integer: true }
end
