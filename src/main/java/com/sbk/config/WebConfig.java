package com.sbk.config;

import net.jawr.web.servlet.JawrSpringController;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

import javax.annotation.Resource;

@Configuration
@EnableWebMvc
@ComponentScan({"com.sbk"})
@PropertySource("classpath:application.properties")
public class WebConfig extends WebMvcConfigurerAdapter {

    @Resource
    private Environment env;

    @Bean
    public InternalResourceViewResolver viewResolver() {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setViewClass(JstlView.class);
        viewResolver.setPrefix("/WEB-INF/views/");
        viewResolver.setSuffix(".jsp");
        return viewResolver;
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/script/**").addResourceLocations("/script/");
        registry.addResourceHandler("/angular/**").addResourceLocations("/script/angular/");
        registry.addResourceHandler("/css/**").addResourceLocations("/css/");
    }

    @Bean
    public JawrSpringController jawrBaseController(){
        JawrSpringController controller = new JawrSpringController();
        controller.setConfigLocation("jawr.properties");
        return controller;
    }

}
