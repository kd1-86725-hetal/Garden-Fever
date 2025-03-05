package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AllCountDataDTO {
	private Long userCount;
	private Long productCount;
	private Long sellerCount;
	private Long deliveryboyCount;
}
