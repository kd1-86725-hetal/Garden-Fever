package com.app.service;


import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.DeliveryBoyDTO;
import com.app.entities.AssigndOrders;
import com.app.entities.DeliveryBoy;
import com.app.entities.JwtRequest;

public interface DeliveryBoyInterface {

	ApiResponse findDeliveryBoyByEmail(DeliveryBoy deliveryBoy);

	DeliveryBoy findById(Long id);

	DeliveryBoy addDeliveryBoy(DeliveryBoy deliveryBoy, Long sellerId);

	DeliveryBoy updateDeliveryBoy(DeliveryBoyDTO deliveryBoyDto, Long id);

	void deleteDeliveryBoy(Long id);

	List<AssigndOrders> getAllPending(Long did);

	void delAssin(Long oid);

	DeliveryBoy login(JwtRequest request);

}
