;(function(global, $) {
    var Greetr = function(firstname,lastname, language, formal) {
        //if formal is string, cast to boolean
        return new Greetr.init(firstname, lastname, language, formal);
    }

    var supportedLangs = ['en','es'];
    greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio Sesion'
    }

    Greetr.prototype = {
        fullname: function() {
            return this.firstname + ' ' + this.lastname;
        },

        validate: function() {
            if(supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid Language";
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstname;
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullname();
        },

        log: function() {

            if(console) {
                console.log(logMessages[this.language] + ': ' + this.fullname());
            }

            //makes method chainable
            return this;
        },

        greet: function(formal) {
            var msg;


            if(formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if(console) {
                console.log(msg);
            }

            //makes method chainable
            return this;
        },

        setLanguage: function(newLang) {
            this.language = newLang;
            this.validate();

            //makes method chainable
            return this;
        },

        setFormal: function(formal) {
            console.log(this.formal);
            this.formal = !!formal; //coerce value to boolean
            return this;
        },

        HTMLGreeting: function(selector) {

            if(!$) {
                throw 'jquery not loaded';
            }

            if(!selector) {
                throw 'Missing selector';
            }

            var msg ;
            if(this.formal) {
                msg = 'formal: ' + this.formalGreeting();
            } else {
                msg = 'informal: ' + this.greeting();
            }

            $(selector).html(msg);

            return this;
        }

    };

    Greetr.init = function(firstname, lastname, language, formal) {
        var self = this;
        self.firstname = firstname || 'John';
        self.lastname = lastname || 'Doe';
        self.language = language || 'en';
        self.formal = (formal == 'true') ; //get an authentic bool value. Do not use Boolean or !!
        console.log(self.formal);

        self.validate();
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));