'use client';
import React, { useState, useEffect } from 'react';
import { IoMdCall } from 'react-icons/io';
import { MdDescription } from 'react-icons/md';
import { useScroll, motion, useTransform } from 'framer-motion';
import { initializePaddle, Paddle } from '@paddle/paddle-js';
import axiosApi from '@/app/api/axios';
import { toast } from 'react-hot-toast';
import Loader from '../Layout/Loader/Loader';
import { FcApproval } from "react-icons/fc";
import Link from 'next/link';

interface Plan {
  id: number;
  name: string;
  description: string;
  price: number;
  calls: number;
  type: string;
  price_id: string | null;
  created_at: string;
  updated_at: string;
  features: string[];
}

const Plans = () => {

  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [planType, setPlanType] = useState<'monthly' | 'yearly'>('monthly');

  useEffect(() => {
    const loadPaddleScript = () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.paddle.com/paddle/v2/paddle.js';
      script.async = true;
      script.onload = () => {
        if (window.Paddle) {
          window.Paddle.Environment.set('sandbox');
          window.Paddle.Initialize({ token: 'test_ba14a1d128bae2248fc68458ef7' });
        }
      };
      document.head.appendChild(script);
    };

    loadPaddleScript();
  }, []);

  const storeSubscription = async (price_id: string | null) => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axiosApi.patch(`/subscription/${price_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("SECOND", response.data.data);
        return response.data.data;
      } else {
        toast.error("Please Login");
      }
    } catch (error) {
      console.error('Storing subscription failed', error);
    }
  };

  const openCheckout = (price_id: string, customer_id: string) => {
    if (window.Paddle) {
      window.Paddle.Checkout.open({
        settings: {
          allowLogout: false,
        },
        items: [
          {
            priceId: price_id,
            quantity: 1,
          },
        ],
        customer: {
          id: customer_id,
        },
        customData: {
          subscription_type: 'default',
        },
      });
    }
  };

  const handleSubscribeClick = async (price_id: string | null) => {
    const subscriptionData = await storeSubscription(price_id);
    console.log("subscriptionData", subscriptionData);
    console.log("priceId", subscriptionData?.items[0]?.priceId);
    console.log("customer", subscriptionData?.customer?.id);
    if (subscriptionData) {
      openCheckout(subscriptionData?.items[0]?.priceId, subscriptionData?.customer?.id);
    }
  };


  useEffect(() => {
    const fetchPlans = async (type: 'monthly' | 'yearly') => {
      try {
        const response = await axiosApi.get('/plan');
        const filteredPlans = response.data.data.filter((plan: Plan) => {
          // Include the free plan and custom solution for yearly type
          if (type === 'yearly' && (plan.name === 'Free' || plan.name === 'Custom Solution')) {
            return true;
          }
          return plan.type === type;
        });
        setPlans(filteredPlans);
      } catch (error) {
        console.error('Error fetching plans:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans(planType);
  }, [planType]);

  return (
    <>
      {
        loading ? (
          <Loader />
        ) : (
          <section id='plans' className=" mx-auto py-12">
            <div className="text-center">
              <h2 className='text-[30px] font-semibold text-slate-700 mb-4'>
                Our Plans
              </h2>
              <div className="flex justify-center space-x-4 mb-6">
                <button
                  className={`px-4 py-2 border rounded ${planType === 'monthly' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                  onClick={() => setPlanType('monthly')}>
                  Monthly
                </button>
                <button
                  className={`px-4 py-2 border rounded ${planType === 'yearly' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                  onClick={() => setPlanType('yearly')}>
                  Yearly
                </button>
              </div>
            </div>

            <div id="mainCoantiner">
              <div className="margin-body">

                <div>
                  <div className="starsec"></div>
                  <div className="starthird"></div>
                  <div className="starfourth"></div>
                  <div className="starfifth"></div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 800px:grid-cols-4 1500px:grid-cols-5">
                  {Array.isArray(plans) && plans.map((plan, index) => (
                    <div className="p-[20px] pricing-column-wrapper col-sm-3 col-md-3" key={index}>
                      <div className="pricing-column">
                        <div className="pricing-price-row">
                          <div className="pricing-price-wrapper">
                            <div className="pricing-price">
                              <div className="pricing-cost">{plan.price}</div>
                              <div className="time">{plan.type}</div>
                            </div>
                          </div>
                        </div>
                        <div className="pricing-row-title">
                          <div className="pricing_row_title">{plan.name}</div>
                        </div>
                        {plan.features.map((feature: string) => {
                          return (
                            <div key={feature} >
                              <figure className="pricing-row">{feature}</figure>
                            </div>
                          );
                        })}

                        <div className="pricing-footer">
                          <div onClick={() => {
                            if (plan.name !== 'Custom Solution') {
                              handleSubscribeClick(plan.price_id);
                            }
                          }}
                            className={`gem-button-container gem-button-position-center ${index === 0 ? 'gem-green' :
                              index === 1 ? 'gem-purpel' :
                                index === 2 ? 'gem-orange' :
                                  index === 3 ? 'gem-yellow' :
                                    index === 4 ? 'gem-blue' : ''
                              }`}><span className='gem-button'>
                              {plan.name === 'Custom Solution' ? (
                                <Link href="/#contact">Contact Us</Link>
                              ) : (
                                <span>Buy Now</span>
                              )}
                            </span>
                          </div>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </section>
        )
      }
    </>
  );
}


export default Plans;