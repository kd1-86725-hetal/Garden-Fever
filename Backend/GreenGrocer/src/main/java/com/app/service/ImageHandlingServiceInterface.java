package com.app.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ApiResponse;

public interface ImageHandlingServiceInterface {

	ApiResponse uplodImage(Long productId, MultipartFile imageFile) throws IOException;

}
