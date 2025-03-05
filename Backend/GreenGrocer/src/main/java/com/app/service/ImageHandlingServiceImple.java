package com.app.service;

import java.io.IOException;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ApiResponse;

@Service
@Transactional
public class ImageHandlingServiceImple implements ImageHandlingServiceInterface {

	@Override
	public ApiResponse uplodImage(Long productId, MultipartFile imageFile) throws IOException {
		// TODO Auto-generated method stub
		return null;
	}

}
