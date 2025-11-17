package com.spring.boot.resturantbackend.controllers.vm;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class OrderVm {
	
	private Long id;
	private Long quantity;

}
