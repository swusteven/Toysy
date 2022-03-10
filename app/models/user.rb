class User < ApplicationRecord

    attr_reader :password
    validates :email, presence: true, uniqueness: true
    validates :password_digest, :session_token, :fname, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    has_many :products,
        primary_key: :id,
        class_name: :Product

    has_many :reviews,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Review

    has_one :cart,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Cart

    has_many :products_on_cart,
        through: :cart,
        source: :products


    has_many :orders,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Order


    ## user's order transactions
    has_many :products_on_an_order,
        through: :orders,
        source: :products

     
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

end
