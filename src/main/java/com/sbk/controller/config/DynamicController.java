package com.sbk.controller.config;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value="/dynamic")
public class DynamicController {
    @RequestMapping(value = "/{task}")
    public ModelAndView angular(@PathVariable String task){
        return new ModelAndView(String.format("angular/%s", task));
    }
}
