package com.sbk.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value="/angular")
public class AngularController {

    @RequestMapping(value = "/1")
    public ModelAndView angular1(){
        return new ModelAndView("angular/1");
    }

    @RequestMapping(value = "/2")
    public ModelAndView angular2(){
        return new ModelAndView("angular/2");
    }

    @RequestMapping(value = "/3")
    public ModelAndView angular3(){
        return new ModelAndView("angular/3");
    }
}
