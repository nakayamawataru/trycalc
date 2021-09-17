class Signup
	include ActiveModel::Model
	include ActiveModel::Attributes
    attr_accessor :company_name, :department, :name, :email, 
	:phone_number, :normal, :oem, :content

	attribute :company_name,  	:string, default: ''
	attribute :name,			:string, default: ''
	attribute :department, 		:string, default: ''
	attribute :email, 			:string, default: ''
	attribute :phone_number, 	:integer, default: ''
	attribute :content,			:integer, default: ''

    validates :company_name, :presence => {:message => '会社名の入力をお願いいたします'}
    validates :name, :presence => {:message => 'お名前の入力をお願いいたします'}
    validates :department, :presence => {:message => '部署名の入力をお願いいたします'}
    validates :email, :presence => {:message => 'Eメールアドレスの入力をお願いいたします'}
    validates :phone_number, :presence => {:message => 'お電話番号の入力をお願いいたします'}

	private

end