package com.sbk.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value="/angular")
public class AngularController {

    @RequestMapping(value = "/{exampleId}")
    public ModelAndView angular1(@PathVariable Long exampleId){
        return new ModelAndView(String.format("angular/%s", exampleId));
    }

}
