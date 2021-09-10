class Inquiry
	include ActiveModel::Model
	include ActiveModel::Attributes
  attr_accessor :company_name, :department, :name, :email, 
	:phone_number, :normal, :oem, :type_of_business, :numbers_of_store, :meo_cheki, 
	:meo_support, :hoshikakutokun, :content

	attribute :company_name,  		:string, default: ''
	attribute :name,							:string, default: ''
	attribute :department, 				:string, default: ''
	attribute :email, 						:string, default: ''
	attribute :phone_number, 			:integer, default: ''
	attribute :normal, 			:boolean, default: ''
	attribute :oem, 			:boolean, default: ''
	attribute :numbers_of_store, 	:integer, default: ''
	attribute :type_of_business,	:integer, default: ''
	attribute :meo_cheki,					:boolean, default: ''
	attribute :meo_support,				:boolean, default: ''
	attribute :hoshikakutokun,		:boolean, default: ''
	attribute :content,						:integer, default: ''

  validates :company_name, :presence => {:message => '会社名の入力をお願いいたします'}
  validates :name, :presence => {:message => 'お名前の入力をお願いいたします'}
  validates :department, :presence => {:message => '部署名の入力をお願いいたします'}
  validates :email, :presence => {:message => 'Eメールアドレスの入力をお願いいたします'}
  validates :phone_number, :presence => {:message => 'お電話番号の入力をお願いいたします'}
  validates :business_type, :presence => {:message => 'お客様の事業形態の入力をお願いいたします'}
  validates :numbers_of_store, :presence => {:message => '導入予定の店舗数を入力してください'}
  validates :plans_interested, :presence => {:message => '導入をご検討されているサービスを1つ以上お選びください'}

	private
		def plans_interested
			meo_cheki.presence || meo_support.presence || hoshikakutokun.presence
		end

		def business_type
			normal.presence || oem.presence
		end

end