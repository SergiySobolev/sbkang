package com.sbk.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by Jeronimo on 29.06.2015.
 */
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
}
