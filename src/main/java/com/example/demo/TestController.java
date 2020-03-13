package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class TestController {
	
	@GetMapping("/{name}")
	public String page(@PathVariable String name, Model model) {
		model.addAttribute("pageName", name);
		return "page";
	}
	
	@GetMapping("/")
	public String home(Model model) {
		model.addAttribute("pageName", "home");
		return "page";
	}
}
