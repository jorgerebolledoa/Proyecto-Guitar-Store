from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    users = db.relationship('User', backref="role")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(200), nullable=False, unique=True)
    phone = db.Column(db.String(200), nullable=False)
    default_shipping_address = db.Column(db.String(200), nullable=False)
    role_id = db.Column(db.Integer, db.ForeignKey("roles.id"))

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "password": self.password,
            "role_id": self.role_id,
            "email": self.email,
            "phone": self.phone,
            "default_shipping_address": self.default_shipping_address
        }
    # get role solo la uso para muchos a muchos, no para 1 a 1
    # def get_roles(self):
    #     return list(map(lambda role: role.serialize(), self.roles))

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Product(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True)
    sku = db.Column(db.String(50), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    img = db.Column(db.String(2500), nullable=False)
    description_1 = db.Column(db.String(5000), nullable=False)
    description_2 = db.Column(db.String(5000), nullable=True)
    description_3 = db.Column(db.String(5000), nullable=True)
    description_4 = db.Column(db.String(5000), nullable=True)
    tittle_description_1 = db.Column(db.String(500), nullable=False)
    tittle_description_2 = db.Column(db.String(500), nullable=True)
    tittle_description_3 = db.Column(db.String(500), nullable=True)
    tittle_description_4 = db.Column(db.String(5000), nullable=True)
    price = db.Column(db.String(50), nullable=False)
    thumbnail = db.Column(db.String(5000), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey("categories.id"))
    categories = db.relationship("Category")

    def serialize(self):
        return {
            "id": self.id,
            "sku": self.sku,
            "name": self.name,
            "img": self.img,
            "description_1": self.description_1,
            "description_2": self.description_2,
            "description_3": self.description_3,
            "description_4": self.description_4,
            "tittle_description_1": self.tittle_description_1,
            "tittle_description_2": self.tittle_description_2,
            "tittle_description_3": self.tittle_description_3,
            "tittle_description_4": self.tittle_description_4,
            "price": self.price,
            "thumbnail": self.thumbnail,
            "category_id": self.category_id
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Category(db.Model):
    __tablename__ = 'categories'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(250), nullable=False)
    thumbnail = db.Column(db.String(250), nullable=False)
    products = db.relationship('Product', backref="category")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "thumbnail": self.thumbnail
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Order(db.Model):
    __tablename__ = "orders"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    amount = db.Column(db.Integer)
    shipping_address = db.Column(db.Integer)
    order_address = db.Column(db.Integer, nullable=False)
    order_date = db.Column(db.DateTime, nullable=False)
    order_email = db.Column(db.String(250), nullable=False)
    order_status = db.Column(db.String(250), nullable=False)
    user = db.relationship("User")

    def serialize(self):
        return {
            "id": self.id,
            "user:id": self.user_id,
            "amount": self.amount,
            "shipping_address": self.shipping_address,
            "order_address": self.order_address,
            "order_date": self.order_date,
            "order_email": self.order_email,
            "order_status": self.order_status
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Order_detail(db.Model):
    __tablename__ = "order_details"
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey("orders.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"))
    price = db.Column(db.Integer)
    quatity = db.Column(db.Integer)
    order = db.relationship("Order")
    products = db.relationship("Product")

    def serialize(self):
        return {
            "id": self.id,
            "order_id": self.order_id,
            "product_id": self.product_id,
            "price": self.price,
            "quatity": self.quatity
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Messsage(db.Model):
    __tablename__ = "messages"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    message = db.Column(db.String(250), nullable=False)
    user = db.relationship('User')

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "message": self.message
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
