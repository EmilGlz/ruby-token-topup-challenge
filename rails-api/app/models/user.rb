class User < ApplicationRecord
  belongs_to :company
  scope :active_with_companies, -> { where(active_status: true).includes(:company) }
end
