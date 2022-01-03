class Service < ApplicationRecord
  belongs_to :worker
  validates :s_type, :min, :desc, presence: true
  validates :min, numericality: { only_integer: true }
end
