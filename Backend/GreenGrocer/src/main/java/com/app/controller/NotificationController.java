package com.app.controller;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.EmailDto;

@RestController
@RequestMapping("/send")
public class NotificationController {

	@Autowired
	private JavaMailSender javaMailSender;
	
	
	/*@PostMapping("/send-email")
	public void sendOtpEmail(String email, String otp) throws MessagingException {
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		// Create a MimeMessageHelper instance to assist with handling MimeMessage
		MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);

		// Set the recipient email address
		mimeMessageHelper.setTo(email);

		// Set the subject of the email
		mimeMessageHelper.setSubject("Verify otp from Get Hired");

		// HTML content with inline CSS for styling
		String htmlContent = "<div style='border: 2px solid #007BFF; padding: 20px;'>"
		+ "<h2 style='color: #007BFF;'>Get Hired - OTP Verification</h2>"
		+ "<p>Your One Time Password (OTP): <strong style='color: #28a745; font-size: 18px;'>" + otp
		+ "</strong></p>"
		+ "<p style='color: #6c757d; font-size: 14px;'>This OTP is valid for a limited time. Please use it to verify your account.</p>"
		+ "</div>";

		// Set the HTML content of the email with content type "text/html"
		mimeMessageHelper.setText(htmlContent, true);
		javaMailSender.send(mimeMessage);
		}*/
	
//	@PostMapping("/send-email")
//	public String sendEmail(@RequestBody EmailDto emailDto)
//	{
//	SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
//	simpleMailMessage.setTo(emailDto.getTo());
//	simpleMailMessage.setSubject(emailDto.getSubject());
//	simpleMailMessage.setText(emailDto.getText());
//	javaMailSender.send(simpleMailMessage);
//
//	 return "Email sent Successfully!!!";
//	}
}
