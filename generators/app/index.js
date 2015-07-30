'use strict';
var yeoman = require('yeoman-generator');
var _ = require('lodash');
// var chalk = require('chalk');
// var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  constructor: function(){
    yeoman.generators.Base.apply(this, arguments);

    this.argument('componentName', {type: String, required: true});
    this.componentName = _.camelCase(this.componentName);
  },
  // prompting: function () {
    // var done = this.async();

    // // Have Yeoman greet the user.
    // this.log(yosay(
    //   'Welcome to the delightful ' + chalk.red('SubComponent') + ' generator!'
    // ));

    // var prompts = [{
    //   name: 'componentName',
    //   message: 'Enter the component name...'
    //   // default: true
    // }];

    // this.prompt(prompts, function (props) {
    //   this.componentName = props.componentName;
    //   // To access props later use this.props.someOption;

    //   done();
    // }.bind(this));
  // },

  writing: {

    // app: function () {
    //   this.fs.copy(
    //     this.templatePath('_package.json'),
    //     this.destinationPath('package.json')
    //   );
    //   this.fs.copy(
    //     this.templatePath('_bower.json'),
    //     this.destinationPath('bower.json')
    //   );
    // },

    projectfiles: function () {
      this.fs.copyTpl(
        this.templatePath('View.js'),
        this.destinationPath(this.componentName + '/views/' +this.componentName+'View.js'),
        { componentName: this.componentName }
      );
      this.fs.copyTpl(
        this.templatePath('Controller.js'),
        this.destinationPath(this.componentName + '/controller/' +this.componentName+'Controller.js'),
        { componentName: this.componentName }
      );
      this.fs.copyTpl(
        this.templatePath('Template.html'),
        this.destinationPath(this.componentName + '/templates/' +this.componentName+'Template.html'),
        { componentName: this.componentName }
      );
      this.fs.copy(
        this.templatePath('.scss'),
        this.destinationPath('../../styles/_' + this.componentName + '.scss')
      );
    },

    // install: function () {
    //   this.installDependencies();
    // }
  }
});
