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
    }
  },

  // install: function () {
  //   this.installDependencies();
  // }
});
