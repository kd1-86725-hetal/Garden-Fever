package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custome_exception.ResourceNotFoundException;
import com.app.dao.AssignedOrderDao;
import com.app.dao.DeliveryBoyDao;
import com.app.dao.SellerDao;
import com.app.dto.ApiResponse;
import com.app.dto.DeliveryBoyDTO;
import com.app.entities.AssigndOrders;
import com.app.entities.DeliveryBoy;
import com.app.entities.JwtRequest;
import com.app.entities.Seller;

@Service
@Transactional
public class DeliveryBoyImpl implements DeliveryBoyInterface {

	@Autowired
	private DeliveryBoyDao deliveryBoyDao;
	@Autowired
	private AssignedOrderDao assignDao;
	@Autowired
	private SellerDao sellerDao;
	
	@Override
	public ApiResponse findDeliveryBoyByEmail(DeliveryBoy deliveryBoy) {
		DeliveryBoy tempDeliveryBoy=deliveryBoyDao.findDeliveryBoyByEmail(deliveryBoy.getEmail());
		if(tempDeliveryBoy.getPassword().equals(deliveryBoy.getPassword()))
			{
				return new ApiResponse("Login Succesfull",true);
			}
		return new ApiResponse("Invalid Username or password",false);
	}

	@Override
	public DeliveryBoy findById(Long id) {
		DeliveryBoy tempDeliveryBoy=deliveryBoyDao.findById(id).orElseThrow(()->new ResourceNotFoundException("Delivery Boy", "Id", id));
		return tempDeliveryBoy;
	}

	@Override
	public DeliveryBoy addDeliveryBoy(DeliveryBoy deliveryBoy, Long sId) {
		String message="Sorry we are unable to process we can't add right now";
		Seller sel = sellerDao.findById(sId).orElseThrow(()->new ResourceNotFoundException("Seller", "Id", sId));
		deliveryBoy.setSeller(sel);
		DeliveryBoy del = deliveryBoyDao.save(deliveryBoy);
		return del;
	}

	@Override
	public DeliveryBoy updateDeliveryBoy(DeliveryBoyDTO deliveryBoyDto,Long id) {
		
		DeliveryBoy dBoy= deliveryBoyDao.findDeliveryBoyByDelId(id);
		dBoy.setAddress(deliveryBoyDto.getAddress());
		dBoy.setCity(deliveryBoyDto.getCity());
		dBoy.setFullName(deliveryBoyDto.getFullName());
		dBoy.setPincode(deliveryBoyDto.getPincode());
		dBoy.setState(deliveryBoyDto.getState());
		deliveryBoyDao.save(dBoy);
		return dBoy;
	}

	@Override
	public void deleteDeliveryBoy(Long id) {
		DeliveryBoy dboy=deliveryBoyDao.findById(id).orElseThrow(()->new ResourceNotFoundException("Delivery Boy", "id", id));
		deliveryBoyDao.deleteById(id);
	}

	@Override
	public List<AssigndOrders> getAllPending(Long did) {
		// TODO Auto-generated method stub
		List<AssigndOrders> assignedOrders = assignDao.findByDelId(did);
		return assignedOrders;
	}

	@Override
	public void delAssin(Long oid) {
		// TODO Auto-generated method stub
		AssigndOrders assignedOrder = assignDao.findByOid(oid);
		assignDao.delete(assignedOrder);
		
	}

	@Override
	public DeliveryBoy login(JwtRequest request) {
		// TODO Auto-generated method stub
		DeliveryBoy del = deliveryBoyDao.findDeliveryBoyByEmail(request.getEmail());
		if(del.getPassword().equals(request.getPassword())) {
			return del;
		}
		return null;
	}
}
