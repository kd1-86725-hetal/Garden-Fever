package com.app.config;

import java.util.Properties;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;

@Configuration
public class EmailAppConfig {

	@Value("${spring.mail.host}")
	private String mailHost;
	@Value("${spring.mail.port}")
	private String mailPort;
	@Value("${spring.mail.username}")
	private String mailUsername;
	@Value("${spring.mail.password}")
	private String mailPassword;
	
	@Bean
	public JavaMailSender getJavaMailSender()
	{
		JavaMailSenderImpl javaMailSender=new JavaMailSenderImpl();
		javaMailSender.setHost(mailHost);
		javaMailSender.setPort(Integer.parseInt(mailPort));
		javaMailSender.setUsername(mailUsername);
		javaMailSender.setPassword(mailPassword);
		
		Properties props=javaMailSender.getJavaMailProperties();
		props.put("mail.smtp.starttls.enable", "true");
		return javaMailSender;
	}
	
	public void sendSetPasswordEmail(String email)throws MessagingException
	{
		JavaMailSenderImpl javaMailSender=new JavaMailSenderImpl();
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);
		mimeMessageHelper.setSubject("Set New Password");
		mimeMessageHelper.setText("<div>\r\n"
				+ "					<a href=\"http://localhost:8080/set-password?email=%s\" target=\"_blank\">\r\n"
				+ "						Click here to change password\r\n"
				+ "					</a>\r\n"
				+ "				</div>",true);
		
		
	}
}
