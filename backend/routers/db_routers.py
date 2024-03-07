class AuthRouter:
    route_app_labels = { 'admin', 'sessions', 'auth', 'contenttypes' }

    def db_for_read(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return ''
        return None

    def db_for_write(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return ''
        return None

    def allow_relation(self, obj1, obj2, **hints):
        if (
            obj1._meta.app_label in self.route_app_labels or
            obj2._meta.app_label in self.route_app_labels
        ):
           return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label in self.route_app_labels:
            return db == ''
        return None

class FukRouter:
    route_app_labels = { 'fuk_aktivnost', 'fuk_gfuk', 'fuk_help', 'fuk_oblast', \
        'fuk_organizacija', 'fuk_orgjed', 'fuk_potpis', 'fuk_procedura', \
            'fuk_proces', 'fuk_proces_veza', 'fuk_rizik', 'fuk_riziks', 'fuk_nepravilnosti' }

    def db_for_read(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return 'fuk_db'
        return None

    def db_for_write(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return 'fuk_db'
        return None

    def allow_relation(self, obj1, obj2, **hints):
        if (
            obj1._meta.app_label in self.route_app_labels or
            obj2._meta.app_label in self.route_app_labels
        ):
           return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label in self.route_app_labels:
            return db == 'fuk_db'
        return None